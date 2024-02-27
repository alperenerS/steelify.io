import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as winston from 'winston';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.printf(({ level, message }) => {
        let color = '';
        if (level === 'error') {
          color = '\x1b[31m'; // Kırmızı
        } else if (level === 'warn') {
          color = '\x1b[33m'; // Sarı
        } else if (level === 'info') {
          color = '\x1b[34m'; // Mavi
        } else if (level === 'verbose') {
          color = '\x1b[36m'; // Cyan
        } else if (level === 'debug') {
          color = '\x1b[37m'; // Beyaz
        } else if (level === 'silly') {
          color = '\x1b[90m'; // Gri
        }

        return `${color}[${level}] ${message}\x1b[0m`; 
      }),
    ),
  });

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      this.logger.log({
        level: 'info', 
        message: `${method} ${originalUrl} {${statusCode}} {${contentLength}} - ${userAgent} ${ip}`,
      });

      if (statusCode === 400) {
        this.logger.error('Something Went Wrong Bad Request !');
      } else if (statusCode === 403) {
        this.logger.warn('Forbidden Request!');
      } else if (statusCode === 500) {
        this.logger.error('Server Error !');
      }
    });

    next();
  }
}
