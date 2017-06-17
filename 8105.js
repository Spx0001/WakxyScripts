function ReadPacket()
{
	packet.ReadLong("characterId");
	packet.ReadShort("unk");
}

ReadPacket();