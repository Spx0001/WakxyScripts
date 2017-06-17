function ReadPacket()
{
	packet.ReadString(packet.ReadInt(), "Token");
}

ReadPacket();