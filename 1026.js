function ReadPacket()
{
	packet.ReadInt("m_encryptedLoginAndPassword length");
	// Need to be decrypted first :)
}

ReadPacket();