function ReadPacket()
{
packet.ReadLong("m_characterId");
packet.ReadByte("Sex");
packet.ReadByte("SkinColor");
packet.ReadByte("HairColor");
packet.ReadByte("PupilColor");
packet.ReadByte("SkinColorFactor");
packet.ReadByte("HairColorFactor")
packet.ReadByte("Cloth")
packet.ReadByte("Face")
packet.ReadShort("Breed");
var name = packet.ReadByte();
packet.ReadString(name, "Name");
packet.ReadBool("Unk");
}

ReadPacket();