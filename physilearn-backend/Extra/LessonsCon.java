import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/lessons")
public class LessonsCon {

    @Autowired
    private LessonsRepo lessonsRepo;

    // CREATE
    @PostMapping
    public Lessons createLesson(@RequestBody Lessons lesson) {
        System.out.println(">> [POST] Creating lesson: " + lesson);
        Lessons saved = lessonsRepo.save(lesson);
        System.out.println(">> [POST] Saved lesson: " + saved);
        return saved;
    }

    // READ ALL
    @GetMapping
    public List<Lessons> getAllLessons() {
        System.out.println(">> [GET] Fetching all lessons");
        List<Lessons> lessons = lessonsRepo.findAll();
        System.out.println(">> [GET] Found " + lessons.size() + " lessons");
        return lessons;
    }

    // READ ONE BY ID
    @GetMapping("/{id}")
    public Lessons getLessonById(@PathVariable String id) {
        System.out.println(">> [GET] Fetching lesson with ID: " + id);
        Optional<Lessons> lesson = lessonsRepo.findById(id);
        if (lesson.isPresent()) {
            System.out.println(">> [GET] Found lesson: " + lesson.get());
        } else {
            System.out.println(">> [GET] Lesson not found for ID: " + id);
        }
        return lesson.orElse(null);
    }

    // UPDATE
    @PutMapping("/{id}")
    public Lessons updateLesson(@PathVariable String id, @RequestBody Lessons updatedLesson) {
        System.out.println(">> [PUT] Updating lesson with ID: " + id);
        updatedLesson.setId(id);
        Lessons saved = lessonsRepo.save(updatedLesson);
        System.out.println(">> [PUT] Updated lesson: " + saved);
        return saved;
    }

    // DELETE
    @DeleteMapping("/{id}")
    public void deleteLesson(@PathVariable String id) {
        System.out.println(">> [DELETE] Deleting lesson with ID: " + id);
        lessonsRepo.deleteById(id);
        System.out.println(">> [DELETE] Deleted lesson with ID: " + id);
    }
}
