function ReadPacket()
{
	packet.ReadLong("Address");
	packet.ReadString(packet.ReadShort(), "Community");
}

ReadPacket();