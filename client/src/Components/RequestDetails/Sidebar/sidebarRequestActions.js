import React from "react";
import { Button } from "antd";
import "./sidebarRequestActions.css";

const SidebarRequestActions = ({ onSave, onDiscard, onPrintQuotation, onUploadPO, onPrintQuality, position }) => {
  return (
    <div className={`request-actions ${position}`}>
      {position === "top" && (
        <div className="button-row">
          <Button type="primary" onClick={onSave} className="action-button">
            Save
          </Button>
          <Button type="default" onClick={onDiscard} className="action-button">
            Discard
          </Button>
        </div>
      )}
      {position === "bottom" && (
        <div className="button-container">
          <div className="button-row">
            <Button type="default" onClick={onPrintQuotation} className="action-button">
              Print Quotation
            </Button>
            <Button type="default" onClick={onUploadPO} className="action-button">
              Upload P.O.
            </Button>
          </div>
          <div className="single-button-row">
            <Button type="default" onClick={onPrintQuality} className="action-button">
              Print Quality Documents
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarRequestActions;
