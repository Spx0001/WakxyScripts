function ReadPacket()
{
	packet.ReadLong("characterId");
	var i = 0;

	while (packet.Length() > 0)
	{
		packet.Log("==== STEP INDEX " + i + " ====");
		packet.ReadInt("x ?");
		packet.ReadInt("y ?");
		packet.ReadShort("z ?");
		packet.Log("======================");
		++i;
	}
}

ReadPacket();