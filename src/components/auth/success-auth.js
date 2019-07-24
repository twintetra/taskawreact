import React from 'react';

const SuccessAuth = ({onCloseBtn, authLogin}) => {

        return (
            <div className="modal d-block overflow-auto">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">You are successfully registered</h5>
                        </div>
                        <div className="modal-body">
                            <p>Use to login: <strong>{authLogin}</strong></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-success"
                                    onClick={onCloseBtn}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default SuccessAuth;