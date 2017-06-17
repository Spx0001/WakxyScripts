function ReadPacket()
{
	packet.ReadString(packet.ReadInt(), "Lang");
}

ReadPacket();