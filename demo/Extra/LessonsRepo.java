import org.springframework.data.mongodb.repository.MongoRepository;

public interface LessonsRepo extends MongoRepository <Lessons, String> {}