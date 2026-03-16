import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class MathUtilsTest {

    @Test 
    void testAdd(){
        assertEquals(5, MathUtils.add(2,3));
    }

    @Test 
    void testMultiple(){
        assertEquals(20, MathUtils.multiply(4, 5));
    }
    
}
