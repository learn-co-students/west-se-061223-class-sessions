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
        # for result in self.results():
        #     if result.game == game:
        #         return True
        # return False
        return game in self.games_played()

    def num_times_played(self, game):
        return len([g for g in self.games_played() if g == game])

    @classmethod
    def highest_scored(cls, game):
        if cls.all:
            max_player = None
            max_score = 0
            for player in cls.all:
                if game.average_score(player) > max_score:
                    max_player = player
                    max_score = game.average_score(player)
            return max_player
        return None
