function ReadPacket()
{
	packet.Log("Invite char to group (/invite)");
	packet.ReadByte("??");
	var nameOrGuid = packet.ReadByte("[0 = by name], [1 = by guid]");
	
	if (nameOrGuid == 0)
	{
		var len = packet.ReadByte();
		packet.ReadString(len, "char name");
	}
	else
		packet.ReadLong("guid ?");

	packet.ReadLong("unk long, always 0 ?");
}

ReadPacket();