function ReadPacket()
{
packet.ReadLong('CharacterID');
packet.ReadByte('??');
var len = packet.ReadByte();
packet.ReadString(len, 'lang');
}

ReadPacket();