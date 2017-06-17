function ReadPacket()
{
	packet.ReadLong("characterId");
	packet.ReadLong("unk");
	packet.ReadByte("unk");
	packet.ReadInt("X");
	packet.ReadInt("Y");
	packet.ReadShort("Z");
}

ReadPacket();