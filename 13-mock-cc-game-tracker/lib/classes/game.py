from classes.result import Result


class Game:
    def __init__(self, title):
        self.title = title

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, title):
        if isinstance(title, str) and len(title) > 0 and not hasattr(self, "title"):
            self._title = title
        else:
            raise Exception

    def results(self):
        pass

    def players(self):
        pass

    def average_score(self, player):
        pass
