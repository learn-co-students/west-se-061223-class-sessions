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

    def auditions(self):
        return [audition for audition in Audition.all if audition.role == self]

    def actors(self):
        return [audition.actor for audition in self.auditions()]

    def locations(self):
        return [audition.location for audition in self.auditions()]

    def lead(self):
        hired_auditions = [audition for audition in self.auditions() if audition.hired]
        if not hired_auditions:
            return "No actors have hired for this role"
        else:
            return hired_auditions[0]

    def understudy(self):
        hired_auditions = [audition for audition in self.auditions() if audition.hired]
        if len(hired_auditions) <= 1:
            return "No understudy has hired for this role"
        else:
            return hired_auditions[1]

    @classmethod
    def not_cast(cls):
        return [
            role
            for role in cls.all
            if not any([audition.hired for audition in role.auditions()])
        ]

    def __repr__(self):
        return f"<Role {self.character_name}>"
