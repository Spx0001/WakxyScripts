function ReadPacket()
{
	packet.Log("CharacterSelectionMessage");
	packet.ReadLong("CharacterId");
	
	var size = packet.ReadInt();
	packet.ReadString(size, "Char name");
}

ReadPacket();