function ReadPacket()
{
	packet.ReadInt("ServerId");
	packet.ReadLong("AccountId");
}

ReadPacket();