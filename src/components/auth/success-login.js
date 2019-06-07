import React from 'react';



const SuccessLogin = ({onCloseBtn}) => {

        return (
            <div className="modal d-block overflow-auto">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">You are successfully sign in</h5>
                        </div>
                        <div className="modal-body">
                            <p>Good</p>
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

export default SuccessLogin;