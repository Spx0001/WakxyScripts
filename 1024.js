function ReadPacket()
{
	packet.ReadInt("length");
		packet.ReadLong("unk");
		// password, user crypted

	packet.ReadInt("length");
		packet.ReadLong("unk");
		// unk strings ??
}

ReadPacket();