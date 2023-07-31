from lib.audition import Audition


class Role:
    all = []

    def __init__(self, character_name):
        self.character_name = character_name
        Role.all.append(self)

    @property
    def character_name(self):
        return self._character_name

    @character_name.setter
    def character_name(self, character_name):
        if not len(character_name):
            raise Exception("Character_name string cannot be empty")
        self._character_name = character_name

    def __repr__(self):
        return f"<Role {self.character_name}>"
