from classes.result import Result


class Player:
    all = []

    def __init__(self, username):
        self.username = username
        Player.all.append(self)

    @property
    def username(self):
        return self._username

    @username.setter
    def username(self, username):
        if type(username) == str and 2 <= len(username) <= 16:
            self._username = username
        else:
            raise Exception

    def results(self):
        return [
            result for result in Result.all if result.player == self
        ]  # like a filter

    def games_played(self):
        return [result.game for result in self.results()]  # like a map

    def played_game(self, game):
        pass

    def num_times_played(self, game):
        pass

    @classmethod
    def highest_scored(cls, game):
        pass
