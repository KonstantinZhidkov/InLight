import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.css';

import { edit } from '../../../../images/images';


const ProfileStatus = ({ status, updateStatus }) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setStatus] = useState(null);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const toggleEditMode = () => setEditMode(!editMode);

    const onStatusChange = e => setStatus(e.currentTarget.value)

    return(
        <div>
            {editMode
                ? <label htmlFor="status">
                    Status:
                    <input
                        autoFocus
                        className={styles.edit__input}
                        id="status"
                        onBlur={() => {
                            updateStatus(localStatus)
                            toggleEditMode()
                        }}
                        onChange={onStatusChange}
                        type="text"
                        value={localStatus}
                    />
                  </label>
                : <span onClick={toggleEditMode}>
                    {`Status: ${status}`}
                  </span>}
            <img alt="edit"
                 className={styles.edit__icon}
                 src={ edit }
            />
        </div>
    )
}

export default ProfileStatus;
