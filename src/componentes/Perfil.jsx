import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

function Perfil() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150");

    const handleLogout = () => {
        // Lógica para logout (se aplicável)
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
                    <Button onClick={handleLogout} className="logoutButton">Sair</Button>
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
                        <Button onClick={() => setIsEditing(!isEditing)} className="editPhotoButton">
                            {isEditing ? 'Cancelar' : 'Editar Foto'}
                        </Button>
                    </div>
                    <div className="profileDetails">
                        <h2>Nome do Usuário</h2>
                        <p>Email: usuario@exemplo.com</p>
                        <p>Data de Nascimento: 01/01/1990</p>
                        </div>
                    <div className="profileActions">
                        <Button variant="primary">Editar Perfil</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
