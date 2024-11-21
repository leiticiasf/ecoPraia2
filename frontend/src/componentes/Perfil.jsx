import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

function Perfil() {

    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");
      
    const editarPerfil = () => {
        navigate('/editarPerfil')
     }; 
    const handleLogout = () => {
        // logout caso precise
        navigate('/');
    };

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setIsEditing(false);
    };

    return (
        <div className='perfil-body'>
            <div className="profileContainer">
                <div className="profileHeader">
                    <h1>Seu Perfil</h1>
                </div>
                <div className="conteudo-perfil">
                    <div className="profilePicture">
                        <img src={profilePic} alt="Profile" />
                        {isEditing && (
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handlePhotoChange} 
                                className="photoInput"
                            />
                        )}
                    </div>
                    <div className="profileDetails">
                        <h2>**nome de usuário**</h2>
                        <p>Email: usuario@exemplo.com</p>
                        </div>
                    <div className="profileActions">
                        <Button onClick={editarPerfil} className="btn-editar">Editar Perfil</Button>
                    </div>
                </div>
            </div>
            {/* botao sair  */}
            <Button onClick={handleLogout} className="logoutButton">Sair</Button>
        </div>
    );
}

export default Perfil;
