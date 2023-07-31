class Audition:
    all = []

    def __init__(self, role, actor, location, phone):
        self.role = role
        self.actor = actor
        self.location = location
        self.phone = phone
        self.hired = False
        Audition.all.append(self)

    @property
    def actor(self):
        return self._actor

    @actor.setter
    def actor(self, actor):
        if not 3 <= len(actor) < 20:
            raise Exception("actor name must be between 3 and 20 characters")
        self._actor = actor

    def call_back(self):
        self.hired = True

    def __repr__(self):
        return f"<Audition | actor: {self.actor}, hired: {self.hired}>"
