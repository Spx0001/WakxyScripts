function ReadPacket()
{
	packet.ReadString("KitScript");
	packet.ReadLong("m_characterId=");
	packet.ReadLong("Unk1 Value");
    packet.ReadByte("Unk2 Value");
	packet.ReadByte("Unk3 Value");
	// Code
}

ReadPacket();