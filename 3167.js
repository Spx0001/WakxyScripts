function ReadPacket()
{
	packet.Log("Recruit message");
	var len = packet.ReadByte();
	packet.ReadString(len, "message");
}

ReadPacket();