function ReadPacket()
{
	packet.Log("/whois charname command");
	var len = packet.ReadByte();
	packet.ReadString(len, "char name");
}

ReadPacket();