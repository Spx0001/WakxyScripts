function ReadPacket()
{
	packet.ReadByte("Version");
	packet.ReadShort("Revision");
	packet.ReadByte("Change");
	var buildSize = packet.ReadByte();

	packet.ReadString(buildSize, "Build");
}

ReadPacket();