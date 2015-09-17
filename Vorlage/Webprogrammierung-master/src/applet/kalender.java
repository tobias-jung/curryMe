package applet;
import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;

public class kalender extends Applet implements Runnable, MouseMotionListener {
	
	int x = 50;
	int y = 50;
	int dx = 1;
	int dy = 1;
	int radius = 20;
	boolean mouseIn = false;
	
	@Override
	public void init ()
	{	
		addMouseMotionListener(this);
	}

	@Override
	public void start (){
		Thread thread = new Thread(this);
		thread.start();

	}
	
	@Override
	public void run() {
		while (true){
		//	x += dx;
		//	y += dy;
			repaint();
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	@Override
	public void paint (Graphics g){
		g.setColor(Color.BLACK);
		g.drawRect(280, 340, 120, 40);
		g.setColor(Color.BLACK);
		g.drawString("Jenny was machst du", x, y);
		if (mouseIn){
			g.setColor(Color.BLUE);
			g.drawString("hier", x, y);
		}
	}

	@Override
	public void stop (){
		
	}
	@Override
	public void destroy (){
		
	}

	@Override
	public void mouseDragged(MouseEvent e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void mouseMoved(MouseEvent e) {
		if (e.getX()>280 && e.getX() < 460){
			if (e.getY() > 320 && e.getY() <360){
			mouseIn = true;
			}
			if (e.getX() > 320 ||  e.getX() <360){
				mouseIn = true;
			}
			if (e.getY() > 320 || e.getY() <360){
					mouseIn = true;
			}
		
	}
	}
	}
