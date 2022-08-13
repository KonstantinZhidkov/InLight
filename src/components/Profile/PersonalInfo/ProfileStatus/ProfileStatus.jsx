import React, { useState } from 'react';
import styles from './ProfileStatus.module.css';

import { edit } from '../../../../images/images';


const ProfileStatus = ({ status }) => {
    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => setEditMode(!editMode);

    return(
        <div>
            {editMode
                ? <label htmlFor="status">
                    Status:
                    <input
                        autoFocus
                        className={styles.edit__input}
                        id="status"
                        onBlur={toggleEditMode}
                        type="text"
                        value={status}
                    />
                  </label>
                : <span onDoubleClick={toggleEditMode}>
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
