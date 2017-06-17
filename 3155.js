function ReadPacket()
{
	var len = packet.ReadByte();
	packet.ReadString(len, "destination char name");

	var lenM = packet.ReadByte();
	packet.ReadString(lenM, "message");

	packet.Log(packet.Length());
}

ReadPacket();