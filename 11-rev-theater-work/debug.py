import ipdb

from lib.audition import Audition
from lib.role import Role

hamlet = Role("Hamlet")
macbeth = Role("Macbeth")

leo = Audition(hamlet, "Leo", "Malibu Dr.", "7082259997")
anna = Audition(hamlet, "Anna", "Rohnert Park", "7042232929")
tony = Audition(hamlet, "Tony", "Silver Lake", "36959920002")
agatha = Audition(macbeth, "Agatha", "Santa Barbara", "6666666666")

anna.call_back()

ipdb.set_trace()
