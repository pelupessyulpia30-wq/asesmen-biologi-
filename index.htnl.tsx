import React, { useState, useEffect, useMemo } from 'react';
import {
  BookOpen,
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  BarChart3,
  Users,
  FileText,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Play,
  RotateCcw,
  Download,
  Printer,
  Sparkles,
  Search,
  Filter,
  CheckSquare,
  HelpCircle,
  TrendingUp,
  Brain,
  Zap,
  Activity,
  Layers,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

// ==========================================
// BANK SOAL ASESMEN SEMESTER GENAP (30 SOAL TOTAL)
// MATERI: SEL (15 SOAL) & SISTEM GERAK (15 SOAL)
// ==========================================
const INITIAL_QUESTIONS = [
  // ----------------------------------------------------
  // BAGIAN I: MATERI SEL (SOAL 1 - 15)
  // ----------------------------------------------------
  {
    id: 'sem_sel_1',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C1',
    difficulty: 'mudah',
    question: '1. Unit terkecil secara struktural dan fungsional yang menyusun tubuh seluruh makhluk hidup adalah...',
    options: ['Jaringan', 'Organ', 'Sel', 'Sistem Organ'],
    correct: 2,
    explanation: 'Sel merupakan unit terkecil penyusun makhluk hidup yang mampu menjalankan fungsi kehidupan dasar.'
  },
  {
    id: 'sem_sel_2',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C2',
    difficulty: 'mudah',
    question: '2. Organel sel yang sering dinamakan "pabrik energi" karena berfungsi dalam respirasi seluler penghasil ATP adalah...',
    options: ['Ribosom', 'Mitokondria', 'Lisosom', 'Badan Golgi'],
    correct: 1,
    explanation: 'Mitokondria bertugas melakukan pembakaran zat makanan melalui respirasi sel untuk memproduksi molekul ATP.'
  },
  {
    id: 'sem_sel_3',
    topic: 'SEL',
    type: 'sumatif',
    format: 'tf',
    cognitive: 'C2',
    difficulty: 'sedang',
    question: '3. Sel tumbuhan memiliki dinding sel yang mengandung selulosa sehingga bersifat kaku, sedangkan sel hewan tidak memiliki dinding sel.',
    options: ['Benar', 'Salah'],
    correct: 0,
    explanation: 'Dinding selulosa memberikan kekuatan dan bentuk kaku pada sel tumbuhan; sel hewan hanya dibatasi membran plasma.'
  },
  {
    id: 'sem_sel_4',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C2',
    difficulty: 'mudah',
    question: '4. Plastida berupa kloroplas yang mengandung pigmen klorofil hanya ditemukan pada...',
    options: ['Sel Hewan', 'Sel Tumbuhan', 'Sel Jamur', 'Sel Manusia'],
    correct: 1,
    explanation: 'Kloroplas berfungsi dalam proses fotosintesis yang hanya dimiliki oleh sel tumbuhan/produsen.'
  },
  {
    id: 'sem_sel_5',
    topic: 'SEL',
    type: 'sumatif',
    format: 'diagram',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '5. Amati diagram organel di bawah ini. Struktur berlipat krista (A) pada organel mitokondria berfungsi untuk...',
    diagramType: 'mitochondria',
    options: ['Sintesis lemak', 'Memperluas area permukaan tempat pembentukan ATP', 'Menyimpan asam amino', 'Mencerna materi asing'],
    correct: 1,
    explanation: 'Lipatan krista memperluas membran dalam mitokondria untuk mengoptimalkan rantaian transpor elektron pembuat ATP.'
  },
  {
    id: 'sem_sel_6',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '6. Peristiwa keluarnya air dari dalam eritrosit (sel darah merah) sehingga sel mengkerut saat dimasukkan ke larutan garam pekat disebut...',
    options: ['Hemolisis', 'Krenasi', 'Turgid', 'Plasmolisis'],
    correct: 1,
    explanation: 'Larutan garam pekat bersifat hipertonik menyebabkan osmosis air keluar sel eritrosit (Krenasi).'
  },
  {
    id: 'sem_sel_7',
    topic: 'SEL',
    type: 'sumatif',
    format: 'tf',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '7. Transpor aktif membutuhkan pemakaian energi ATP karena memindahkan zat melawan gradien konsentrasi.',
    options: ['Benar', 'Salah'],
    correct: 0,
    explanation: 'Transpor aktif memompa molekul terlarut dari konsentrasi rendah ke tinggi dengan bantuan energi ATP.'
  },
  {
    id: 'sem_sel_8',
    topic: 'SEL',
    type: 'sumatif',
    format: 'complex_mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '8. Manakah dari organel berikut yang terlibat aktif dalam proses sintesis dan sekresi protein? (Pilih semua jawaban benar)',
    options: ['Ribosom', 'Retikulum Endoplasma Kasar', 'Badan Golgi', 'Sentriol'],
    correct: [0, 1, 2],
    explanation: 'Ribosom merakit protein, RE kasar mentranspor, dan Badan Golgi mengemas/mensekresikannya.'
  },
  {
    id: 'sem_sel_9',
    topic: 'SEL',
    type: 'sumatif',
    format: 'diagram',
    cognitive: 'C4',
    difficulty: 'sulit',
    question: '9. Pada model struktur membran plasma fosfolipid bilayer berikut, bagian polar yang bersifat hidrofilik (suka air) ditunjukkan oleh...',
    diagramType: 'membrane',
    options: ['Kepala Fosfat', 'Ekor Asam Lemak', 'Protein Transmembran', 'Glukosa'],
    correct: 0,
    explanation: 'Kepala fosfat berhadapan dengan cairan ekstrasel/intrasel karena bersifat polar hidrofilik.'
  },
  {
    id: 'sem_sel_10',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '10. Organel pencerna intraseluler yang kaya akan enzim hidrolitik untuk menghancurkan organel tua (autofagi) adalah...',
    options: ['Lisosom', 'Peroksisom', 'Vakuola', 'Sentrosom'],
    correct: 0,
    explanation: 'Lisosom menampung enzim hidrolitik untuk mendaur ulang komponen sel tua maupun mencerna patogen.'
  },
  {
    id: 'sem_sel_11',
    topic: 'SEL',
    type: 'sumatif',
    format: 'tf',
    cognitive: 'C2',
    difficulty: 'mudah',
    question: '11. Difusi terfasilitasi memerlukan protein pembawa (carrier protein) tetapi tidak memerlukan energi ATP.',
    options: ['Benar', 'Salah'],
    correct: 0,
    explanation: 'Difusi terfasilitasi adalah transpor pasif yang dibantu protein membran tanpa konsumsi ATP.'
  },
  {
    id: 'sem_sel_12',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C4',
    difficulty: 'sulit',
    question: '12. Saat sel tumbuhan ditempatkan dalam akuades murni, sel menjadi turgid tetapi tidak pecah. Hal ini terjadi karena...',
    options: ['Adanya membran plasma yang tebal', 'Keberadaan dinding sel selulosa yang kaku', 'Vakuola mengeluarkan air kembali', 'Ribosom memompa ion'],
    correct: 1,
    explanation: 'Dinding sel yang kaku menahan tekanan turgor air sehingga sel tumbuhan tidak mengalami lisis/pecah.'
  },
  {
    id: 'sem_sel_13',
    topic: 'SEL',
    type: 'sumatif',
    format: 'matching',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '13. Pasangkan organel sel berikut dengan fungsinya yang tepat!',
    options: [
      'Mitokondria -> Respirasi Seluler',
      'Ribosom -> Sintesis Protein',
      'Kloroplas -> Fotosintesis',
      'Semua pasangan di atas tepat'
    ],
    correct: 3,
    explanation: 'Pasangan fungsi Mitokondria, Ribosom, dan Kloroplas seluruhnya telah sesuai.'
  },
  {
    id: 'sem_sel_14',
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C2',
    difficulty: 'sedang',
    question: '14. Pasangan organel sel yang pembentukannya saling berkaitan dalam pembelahan sel hewan adalah...',
    options: ['Sentriol dan Sentrosom', 'Lisosom dan Vakuola', 'Badan Golgi dan Plastida', 'RE Kasar dan Nukleolus'],
    correct: 0,
    explanation: 'Sentriol dalam sentrosom membentuk benang spindel saat pembelahan sel hewan.'
  },
  {
    id: 'sem_sel_15',
    topic: 'SEL',
    type: 'sumatif',
    format: 'complex_mc',
    cognitive: 'C5',
    difficulty: 'sulit',
    question: '15. Manakah karakteristik yang menjadi pembeda utama antara sel prokariotik dan sel eukariotik? (Pilih semua jawaban benar)',
    options: [
      'Keberadaan membran inti (nukleus)',
      'Keberadaan asam nukleat (DNA/RNA)',
      'Keberadaan organel bermembran seperti mitokondria',
      'Keberadaan membran plasma'
    ],
    correct: [0, 2],
    explanation: 'Sel prokariotik tidak memiliki membran inti dan tidak memiliki organel bermembran.'
  },

  // ----------------------------------------------------
  // BAGIAN II: MATERI SISTEM GERAK (SOAL 16 - 30)
  // ----------------------------------------------------
  {
    id: 'sem_gerak_16',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C1',
    difficulty: 'mudah',
    question: '16. Tulang dinamakan alat gerak pasif karena...',
    options: ['Tidak dapat memanjang', 'Memiliki struktur keras', 'Tidak dapat bergerak tanpa bantuan kontraksi otot', 'Tidak dialiri pembuluh darah'],
    correct: 2,
    explanation: 'Tulang merupakan alat gerak pasif yang pergerakannya digerakkan oleh otot selaku alat gerak aktif.'
  },
  {
    id: 'sem_gerak_17',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C2',
    difficulty: 'sedang',
    question: '17. Sendi yang memungkinkan gerakan ke segala arah seperti pada hubungan antara gelang bahu dan tulang lengan atas adalah...',
    options: ['Sendi Engsel', 'Sendi Peluru', 'Sendi Putar', 'Sendi Pelana'],
    correct: 1,
    explanation: 'Sendi peluru (ball-and-socket) memberikan keleluasaan gerak ke segala arah.'
  },
  {
    id: 'sem_gerak_18',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'tf',
    cognitive: 'C2',
    difficulty: 'mudah',
    question: '18. Otot jantung bekerja secara involunter (luar sadar) dan memiliki struktur lurik bercabang dengan inti di tengah.',
    options: ['Benar', 'Salah'],
    correct: 0,
    explanation: 'Otot jantung berciri mirip otot lurik tetapi bekerja otomatis secara tidak sadar (involunter).'
  },
  {
    id: 'sem_gerak_19',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '19. Saat siku tangan ditekuk (fleksi), pasangan kerja otot bisep dan trisep secara antagonis adalah...',
    options: [
      'Bisep relaksasi, trisep kontraksi',
      'Bisep kontraksi, trisep relaksasi',
      'Keduanya mengalami kontraksi',
      'Keduanya mengalami relaksasi'
    ],
    correct: 1,
    explanation: 'Gerak fleksi siku membuat bisep berkontraksi memendek dan trisep berelaksasi memanjang.'
  },
  {
    id: 'sem_gerak_20',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'diagram',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '20. Berdasarkan diagram artikulasi berikut, jenis sendi yang menghubungkan tulang lengan atas dengan tulang belikat adalah...',
    diagramType: 'joint_ball_socket',
    options: ['Sendi Engsel', 'Sendi Peluru', 'Sendi Putar', 'Sendi Geser'],
    correct: 1,
    explanation: 'Hubungan bonggol sendi dan mangkok sendi membentuk artikulasi sendi peluru.'
  },
  {
    id: 'sem_gerak_21',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '21. Kelainan tulang belakang yang melengkung berlebihan ke arah samping menyerupai huruf "S" dinamakan...',
    options: ['Lordosis', 'Kifosis', 'Skoliosis', 'Osteoporosis'],
    correct: 2,
    explanation: 'Skoliosis ditandai dengan pembengkokan lateral tulang belakang ke samping kanan/kiri.'
  },
  {
    id: 'sem_gerak_22',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'diagram',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '22. Amatilah ciri mikroskopis otot di bawah ini. Jaringan otot dengan garis gelap-terang dan inti banyak di tepi ini merupakan...',
    diagramType: 'skeletal_muscle',
    options: ['Otot Lurik (Rangka)', 'Otot Polos', 'Otot Jantung', 'Tendon'],
    correct: 0,
    explanation: 'Jaringan otot lurik/rangka ditandai pita gelap terang transversalis dan percabangan multinukleus di pinggir.'
  },
  {
    id: 'sem_gerak_23',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'complex_mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '23. Mana sajakah dari anggota tulang berikut yang dikelompokkan ke dalam jenis tulang panjang / tulang pipa? (Pilih semua jawaban benar)',
    options: [
      'Tulang Paha (Femur)',
      'Tulang Lengan Atas (Humerus)',
      'Tulang Kering (Tibia)',
      'Tulang Belikat (Scapula)'
    ],
    correct: [0, 1, 2],
    explanation: 'Femur, Humerus, dan Tibia adalah tulang pipa/panjang. Scapula termasuk tulang pipih.'
  },
  {
    id: 'sem_gerak_24',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'tf',
    cognitive: 'C1',
    difficulty: 'mudah',
    question: '24. Rangka tubuh manusia dewasa normal tersusun atas 206 ruas tulang yang saling terhubung.',
    options: ['Benar', 'Salah'],
    correct: 0,
    explanation: 'Tubuh manusia dewasa umumnya tersusun atas total 206 tulang terartikulasi.'
  },
  {
    id: 'sem_gerak_25',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C5',
    difficulty: 'sulit',
    question: '25. Pada mekanisme kontraksi otot teori sliding filament, ion Kalsium (Ca2+) berperan mengikat protein...',
    options: ['Aktin', 'Miosin', 'Troponin', 'Tropomiosin'],
    correct: 2,
    explanation: 'Ion Ca2+ mengikat Troponin, mengubah konformasinya untuk menyingkap tropomiosin pembuka sisa perikatan miosin.'
  },
  {
    id: 'sem_gerak_26',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '26. Penghubung antara jaringan otot dengan struktur tulang yang berfungsi mentransmisikan gaya tarik saat kontraksi dinamakan...',
    options: ['Ligamen', 'Tendon', 'Kartilago', 'Osteosit'],
    correct: 1,
    explanation: 'Tendon adalah jaringan ikat padat yang melekatkan otot rangka ke tulang.'
  },
  {
    id: 'sem_gerak_27',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'matching',
    cognitive: 'C3',
    difficulty: 'sedang',
    question: '27. Jodohkan nama gangguan sistem gerak berikut dengan gejalanya!',
    options: [
      'Osteoporosis -> Pengeroposan kerapatan tulang',
      'Rakhitis -> Pembengkokan tulang akibat kurang Vit D',
      'Tetanus -> Kejang otot terus menerus akibat Clostridium',
      'Semua pasangan di atas tepat'
    ],
    correct: 3,
    explanation: 'Setiap pasangan kelainan gerak dan gejalanya sudah tepat.'
  },
  {
    id: 'sem_gerak_28',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '28. Penumpukan senyawa kimia hasil metabolisme an aerob pada sel otot yang menimbulkan rasa lelah dan pegal adalah...',
    options: ['Asam Piruvat', 'Asam Laktat', 'Asam Urat', 'Kreatin Fosfat'],
    correct: 1,
    explanation: 'Asam laktat terbentuk akibat pembongkaran glukosa tanpa oksigen (anaerob) yang memicu kelelahan otot.'
  },
  {
    id: 'sem_gerak_29',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'complex_mc',
    cognitive: 'C4',
    difficulty: 'sedang',
    question: '29. Gerakan tubuh mana sajakah yang termasuk dalam contoh gerak antagonis? (Pilih semua jawaban benar)',
    options: [
      'Fleksi dan Ekstensi (Menekuk & meluruskan siku)',
      'Abduksi dan Adduksi (Menjauhi & mendekati badan)',
      'Pronasi dan Supinasi (Menelungkup & menengadah)',
      'Sinergis otot antartulang rusuk saat bernapas'
    ],
    correct: [0, 1, 2],
    explanation: 'Fleksi-ekstensi, abduksi-adduksi, serta pronasi-supinasi adalah pasangan gerak berlawanan (antagonis).'
  },
  {
    id: 'sem_gerak_30',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C5',
    difficulty: 'sulit',
    question: '30. Jenis tulang rawan yang banyak menyusun cuping hidung dan daun telinga karena bersifat lentur/elastis adalah kartilago...',
    options: ['Hialin', 'Fibrosa', 'Elastis', 'Osteon'],
    correct: 2,
    explanation: 'Kartilago elastis kaya akan serabut elastin yang memberikan kelenturan pada organ seperti daun telinga.'
  }
];

// --- INITIAL MOCK RESULTS FOR TEACHER ANALYTICS ---
const INITIAL_STUDENT_RESULTS = [
  {
    id: 'res_1',
    studentName: 'Ahmad Pelupessy',
    studentId: 'TEH-2026-001',
    topic: 'SEL',
    type: 'sumatif',
    score: 95,
    category: 'Sangat Baik',
    correctCount: 19,
    totalQuestions: 20,
    date: '2026-11-01',
    timeSpent: '18 min'
  },
  {
    id: 'res_2',
    studentName: 'Siti Tehoru',
    studentId: 'TEH-2026-002',
    topic: 'SEL',
    type: 'sumatif',
    score: 82,
    category: 'Baik',
    correctCount: 16,
    totalQuestions: 20,
    date: '2026-11-01',
    timeSpent: '22 min'
  },
  {
    id: 'res_3',
    studentName: 'Rahmat Latuconsina',
    studentId: 'TEH-2026-003',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    score: 68,
    category: 'Perlu Bimbingan',
    correctCount: 13,
    totalQuestions: 20,
    date: '2026-11-02',
    timeSpent: '25 min'
  },
  {
    id: 'res_4',
    studentName: 'Nurul Hayat',
    studentId: 'TEH-2026-004',
    topic: 'SISTEM GERAK',
    type: 'sumatif',
    score: 88,
    category: 'Baik',
    correctCount: 17,
    totalQuestions: 20,
    date: '2026-11-02',
    timeSpent: '20 min'
  },
  {
    id: 'res_5',
    studentName: 'Fajar Wattimena',
    studentId: 'TEH-2026-005',
    topic: 'SEL',
    type: 'diagnostik',
    score: 75,
    category: 'Cukup',
    correctCount: 7,
    totalQuestions: 10,
    date: '2026-11-03',
    timeSpent: '10 min'
  }
];

export default function App() {
  // Navigation & User Context
  const [activeTab, setActiveTab] = useState('home'); // home, test_selection, test_runner, results, dashboard, bank_soal, user_guide
  const [userRole, setUserRole] = useState(null); // 'teacher' | 'student' | null
  const [studentInfo, setStudentInfo] = useState({ name: '', id: '' });
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginType, setLoginType] = useState('student'); // 'student' | 'teacher'

  // Question & Assessment State
  const [questions, setQuestions] = useState(INITIAL_QUESTIONS);
  const [selectedTopic, setSelectedTopic] = useState('SEL'); // 'SEL' | 'SISTEM GERAK'
  const [selectedType, setSelectedType] = useState('sumatif'); // 'diagnostik' | 'formatif' | 'sumatif'
  const [currentExamQuestions, setCurrentExamQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timerSeconds, setTimerSeconds] = useState(1200); // 20 mins default
  const [examActive, setExamActive] = useState(false);
  const [lastExamResult, setLastExamResult] = useState(null);

  // Student Results History (Persistent Mock Data)
  const [studentResults, setStudentResults] = useState(INITIAL_STUDENT_RESULTS);

  // Filter & Search States in Teacher View
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTopic, setFilterTopic] = useState('ALL');

  // Teacher Question Editor Form State
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    topic: 'SEL',
    type: 'sumatif',
    format: 'mc',
    cognitive: 'C2',
    difficulty: 'sedang',
    question: '',
    options: ['', '', '', ''],
    correct: 0,
    explanation: ''
  });

  // --- TIMER EFFECT FOR ACTIVE EXAM ---
  useEffect(() => {
    let interval = null;
    if (examActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (examActive && timerSeconds === 0) {
      handleSubmitExam();
    }
    return () => clearInterval(interval);
  }, [examActive, timerSeconds]);

  // Save exam progress temporarily to local storage
  useEffect(() => {
    if (examActive) {
      const savedState = {
        userAnswers,
        flaggedQuestions,
        currentQuestionIdx,
        timerSeconds
      };
      localStorage.setItem('bio_exam_progress', JSON.stringify(savedState));
    }
  }, [userAnswers, flaggedQuestions, currentQuestionIdx, timerSeconds, examActive]);

  // Handle Login Action
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginType === 'teacher') {
      setUserRole('teacher');
      setActiveTab('dashboard');
    } else {
      if (!studentInfo.name || !studentInfo.id) return;
      setUserRole('student');
      setActiveTab('test_selection');
    }
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUserRole(null);
    setActiveTab('home');
  };

  // Start Assessment Logic (Auto selects 30 questions for Semester Exam)
  const startAssessment = (topic, type) => {
    if (!userRole) {
      setLoginModalOpen(true);
      return;
    }

    let examQuestions = [...questions];
    // If specific topic selected instead of all
    if (topic !== 'ALL') {
      examQuestions = questions.filter((q) => q.topic === topic);
    }

    if (examQuestions.length === 0) {
      alert('Belum ada soal yang tersedia.');
      return;
    }

    setSelectedTopic(topic === 'ALL' ? 'SEL & SISTEM GERAK (SEMESTER GENAP)' : topic);
    setSelectedType(type);
    setCurrentExamQuestions(examQuestions);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    // Set 45 mins timer for 30 questions exam
    setTimerSeconds(2700);
    setExamActive(true);
    setActiveTab('test_runner');
  };

  // Submit & Score Calculation Engine
  const handleSubmitExam = () => {
    setExamActive(false);
    let correctCount = 0;
    const total = currentExamQuestions.length;

    currentExamQuestions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (q.format === 'complex_mc') {
        if (Array.isArray(ans) && Array.isArray(q.correct)) {
          const isSame =
            ans.length === q.correct.length && ans.every((v) => q.correct.includes(v));
          if (isSame) correctCount++;
        }
      } else {
        if (ans === q.correct) correctCount++;
      }
    });

    const score = Math.round((correctCount / total) * 100);
    let category = 'Perlu Bimbingan';
    if (score >= 90) category = 'Sangat Baik';
    else if (score >= 80) category = 'Baik';
    else if (score >= 70) category = 'Cukup';

    const resultObj = {
      id: 'res_' + Date.now(),
      studentName: studentInfo.name || 'Siswa Mandiri',
      studentId: studentInfo.id || 'TEH-2026-X',
      topic: selectedTopic,
      type: selectedType,
      score,
      category,
      correctCount,
      totalQuestions: total,
      date: new Date().toISOString().split('T')[0],
      timeSpent: `${Math.floor((2700 - timerSeconds) / 60)} min`
    };

    setLastExamResult(resultObj);
    setStudentResults((prev) => [resultObj, ...prev]);
    localStorage.removeItem('bio_exam_progress');
    setActiveTab('results');
  };

  // Answer selection handler
  const handleSelectAnswer = (qIndex, answerValue) => {
    const q = currentExamQuestions[qIndex];
    if (q.format === 'complex_mc') {
      const currentArr = userAnswers[qIndex] || [];
      const updated = currentArr.includes(answerValue)
        ? currentArr.filter((i) => i !== answerValue)
        : [...currentArr, answerValue];
      setUserAnswers({ ...userAnswers, [qIndex]: updated });
    } else {
      setUserAnswers({ ...userAnswers, [qIndex]: answerValue });
    }
  };

  // Toggle flag
  const toggleFlag = (qIndex) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qIndex]: !prev[qIndex]
    }));
  };

  // Handle Add New Question to Bank
  const handleAddQuestionSubmit = (e) => {
    e.preventDefault();
    const created = {
      ...newQuestion,
      id: 'custom_' + Date.now()
    };
    setQuestions((prev) => [created, ...prev]);
    setShowAddModal(false);
    setNewQuestion({
      topic: 'SEL',
      type: 'sumatif',
      format: 'mc',
      cognitive: 'C2',
      difficulty: 'sedang',
      question: '',
      options: ['', '', '', ''],
      correct: 0,
      explanation: ''
    });
  };

  // Export CSV Function
  const exportToCSV = () => {
    const headers = ['Nama Siswa', 'NIS/ID', 'Materi', 'Jenis Assessment', 'Nilai', 'Kategori', 'Tanggal'];
    const rows = studentResults.map((r) => [
      `"${r.studentName}"`,
      `"${r.studentId}"`,
      `"${r.topic}"`,
      `"${r.type}"`,
      r.score,
      `"${r.category}"`,
      `"${r.date}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Hasil_Asesmen_Biologi_SMAS_Alhilaal_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render SVG Biological Diagrams
  const renderDiagram = (type) => {
    switch (type) {
      case 'mitochondria':
        return (
          <div className="w-full h-48 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 flex items-center justify-center my-3 relative overflow-hidden">
            <svg viewBox="0 0 300 150" className="w-full h-full max-w-sm">
              <ellipse cx="150" cy="75" rx="130" ry="60" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="4" />
              <path d="M 40 75 Q 70 30 100 75 T 160 75 T 220 75 T 260 75" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="4 2" />
              <path d="M 60 75 C 80 110, 120 110, 140 75 C 160 40, 200 40, 240 75" fill="none" stroke="#3B82F6" strokeWidth="3" />
              <text x="130" y="40" fill="#F59E0B" className="text-xs font-bold">Krista (A)</text>
              <text x="120" y="100" fill="#3B82F6" className="text-xs font-bold">Matriks</text>
            </svg>
          </div>
        );
      case 'joint_ball_socket':
        return (
          <div className="w-full h-48 bg-blue-950/20 border border-blue-500/30 rounded-xl p-4 flex items-center justify-center my-3">
            <svg viewBox="0 0 200 150" className="w-full h-full max-w-xs">
              <path d="M 40 40 Q 90 20 100 75 Q 90 130 40 110 Z" fill="#94A3B8" stroke="#64748B" strokeWidth="3" />
              <circle cx="125" cy="75" r="30" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="3" />
              <rect x="150" y="65" width="40" height="20" rx="5" fill="#64748B" />
              <text x="50" y="75" fill="#1E293B" className="text-xs font-bold">Mangkok Sendi</text>
              <text x="110" y="80" fill="#FFFFFF" className="text-xs font-bold">Bonggol</text>
            </svg>
          </div>
        );
      case 'membrane':
        return (
          <div className="w-full h-48 bg-slate-900 border border-slate-700 rounded-xl p-4 flex items-center justify-center my-3">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {[30, 70, 110, 150, 190, 230, 270].map((cx, i) => (
                <g key={i}>
                  {/* Top Layer */}
                  <circle cx={cx} cy="30" r="12" fill="#3B82F6" />
                  <line x1={cx - 4} y1="42" x2={cx - 4} y2="58" stroke="#F59E0B" strokeWidth="2" />
                  <line x1={cx + 4} y1="42" x2={cx + 4} y2="58" stroke="#F59E0B" strokeWidth="2" />
                  {/* Bottom Layer */}
                  <circle cx={cx} cy="90" r="12" fill="#3B82F6" />
                  <line x1={cx - 4} y1="78" x2={cx - 4} y2="62" stroke="#F59E0B" strokeWidth="2" />
                  <line x1={cx + 4} y1="78" x2={cx + 4} y2="62" stroke="#F59E0B" strokeWidth="2" />
                </g>
              ))}
              <text x="10" y="25" fill="#3B82F6" className="text-xs font-bold">Gugus Hidrofilik</text>
              <text x="10" y="62" fill="#F59E0B" className="text-xs font-bold">Ekor Hidrofobik</text>
            </svg>
          </div>
        );
      case 'skeletal_muscle':
        return (
          <div className="w-full h-48 bg-red-950/20 border border-red-500/30 rounded-xl p-4 flex items-center justify-center my-3">
            <svg viewBox="0 0 280 120" className="w-full h-full">
              <rect x="20" y="20" width="240" height="80" rx="10" fill="#EF4444" fillOpacity="0.3" stroke="#EF4444" strokeWidth="3" />
              <line x1="60" y1="20" x2="60" y2="100" stroke="#991B1B" strokeWidth="4" />
              <line x1="120" y1="20" x2="120" y2="100" stroke="#991B1B" strokeWidth="4" />
              <line x1="180" y1="20" x2="180" y2="100" stroke="#991B1B" strokeWidth="4" />
              <circle cx="90" cy="35" r="7" fill="#1E3A8A" />
              <circle cx="150" cy="85" r="7" fill="#1E3A8A" />
              <text x="75" y="65" fill="#991B1B" className="text-xs font-bold">Pita Gelap-Terang</text>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col antialiased selection:bg-emerald-500 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Identity */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-black text-slate-100 tracking-tight text-sm lg:text-base leading-none group-hover:text-emerald-400 transition-colors">
                BIOLOGY ASSESSMENT CENTER
              </h1>
              <p className="text-[11px] text-slate-400 font-medium tracking-wider">
                SMAS Alhilaal Tehoru • Ulpia Pelupessy, S.Pd.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-medium">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors ${activeTab === 'home' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'}`}
            >
              Beranda
            </button>
            <button
              onClick={() => setActiveTab('test_selection')}
              className={`transition-colors ${activeTab === 'test_selection' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'}`}
            >
              Asesmen Semester
            </button>
            {userRole === 'teacher' && (
              <>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`transition-colors ${activeTab === 'dashboard' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'}`}
                >
                  Dashboard Guru
                </button>
                <button
                  onClick={() => setActiveTab('bank_soal')}
                  className={`transition-colors ${activeTab === 'bank_soal' ? 'text-emerald-400 font-semibold' : 'text-slate-300 hover:text-white'}`}
                >
                  Bank Soal
                </button>
              </>
            )}
          </nav>

          {/* User Auth Action */}
          <div className="flex items-center space-x-3">
            {userRole ? (
              <div className="flex items-center space-x-3 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  {userRole === 'teacher' ? 'G' : 'S'}
                </div>
                <div className="text-xs text-left">
                  <div className="font-semibold text-slate-200">
                    {userRole === 'teacher' ? 'Ulpia Pelupessy, S.Pd.' : studentInfo.name || 'Peserta Didik'}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">{userRole}</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-slate-400 hover:text-red-400 transition-colors p-1"
                  title="Keluar"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-emerald-500/25 flex items-center space-x-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Masuk Portal</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER CONTENT SWITCH */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8">
        {/* 1. LANDING PAGE / BERANDA */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 border border-slate-800 p-8 lg:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl space-y-6">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Platform Evaluation & Assessment Resmi SMAS Alhilaal Tehoru</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Evaluasi Biologi Interaktif & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">Penilaian Otomatis</span>
                </h1>

                <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                  Selamat datang di portal ujian resmi Biologi SMAS Alhilaal Tehoru. Didesain untuk mengukur pemahaman peserta didik secara mendalam pada materi <strong className="text-emerald-400">Sel</strong> dan <strong className="text-blue-400">Sistem Gerak Manusia</strong> melalui asesmen Diagnostik, Formatif, dan Sumatif.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('test_selection')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center space-x-2 text-sm"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Mulai Asesmen Semester (30 Soal)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('user_guide')}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm flex items-center space-x-2"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span>Petunjuk Penggunaan</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Assessment Material Cards */}
            <section className="space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h2 className="text-2xl font-bold text-white">Materi Utama Asesmen</h2>
                <p className="text-slate-400 text-sm">Pilih topik materi Biologi yang ingin diuji atau dievaluasi hari ini.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      1. Struktur & Fungsi Sel
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Meliputi pengertian sel, organel sel hewan vs tumbuhan, mekanisme transpor membran (osmosis & difusi), dan reaksi seluler.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-semibold">15 Soal Tersedia</span>
                    <button
                      onClick={() => {
                        setSelectedTopic('SEL');
                        setActiveTab('test_selection');
                      }}
                      className="text-xs font-semibold text-white bg-emerald-600/80 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
                    >
                      <span>Pilih Sel</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="group relative bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">
                      <Activity className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      2. Sistem Gerak pada Manusia
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Meliputi struktur tulang rangka, persendian, jenis otot, mekanisme kontraksi otot, dan gangguan/kelainan sistem gerak.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-800/80 mt-6 flex items-center justify-between">
                    <span className="text-xs text-blue-400 font-semibold">15 Soal Tersedia</span>
                    <button
                      onClick={() => {
                        setSelectedTopic('SISTEM GERAK');
                        setActiveTab('test_selection');
                      }}
                      className="text-xs font-semibold text-white bg-blue-600/80 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-1"
                    >
                      <span>Pilih Sistem Gerak</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. TEST SELECTION PANEL */}
        {activeTab === 'test_selection' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-2 text-center">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 uppercase tracking-widest">
                Ujian Resmi SMAS Alhilaal Tehoru
              </span>
              <h2 className="text-3xl font-extrabold text-white">Asesmen Semester Genap</h2>
              <p className="text-slate-400 text-sm">
                Ujian komprehensif 30 Soal gabungan materi <strong className="text-emerald-400">Sel</strong> dan <strong className="text-blue-400">Sistem Gerak Manusia</strong>.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6 shadow-xl text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-medium">Jumlah Soal</div>
                  <div className="text-xl font-extrabold text-emerald-400 mt-1">30 Soal</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-medium">Alokasi Waktu</div>
                  <div className="text-xl font-extrabold text-blue-400 mt-1">45 Menit</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="text-slate-400 font-medium">Cakupan Pembelajaran</div>
                  <div className="text-xl font-extrabold text-amber-400 mt-1">Sel & Sistem Gerak</div>
                </div>
              </div>

              <button
                onClick={() => startAssessment('ALL', 'sumatif')}
                className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-emerald-950/50 flex items-center justify-center space-x-2 text-base"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Mulai Asesmen Semester Genap (30 Soal)</span>
              </button>
            </div>
          </div>
        )}

        {/* 3. TEST RUNNER ENGINE */}
        {activeTab === 'test_runner' && currentExamQuestions.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase">
                    Soal No. {currentQuestionIdx + 1} dari {currentExamQuestions.length}
                  </span>
                  <span className="text-xs text-slate-400 uppercase font-medium">
                    {currentExamQuestions[currentQuestionIdx].topic} • {currentExamQuestions[currentQuestionIdx].cognitive || 'C2'}
                  </span>
                </div>
                <button
                  onClick={() => toggleFlag(currentQuestionIdx)}
                  className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                    flaggedQuestions[currentQuestionIdx]
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                  <span>{flaggedQuestions[currentQuestionIdx] ? 'Ragu-ragu (Tersimpan)' : 'Tandai Ragu'}</span>
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-base md:text-lg font-medium text-slate-100 leading-relaxed">
                  {currentExamQuestions[currentQuestionIdx].question}
                </h3>
                {currentExamQuestions[currentQuestionIdx].format === 'diagram' &&
                  renderDiagram(currentExamQuestions[currentQuestionIdx].diagramType)}
              </div>

              <div className="space-y-3 pt-2">
                {currentExamQuestions[currentQuestionIdx].options.map((option, idx) => {
                  const q = currentExamQuestions[currentQuestionIdx];
                  const isComplex = q.format === 'complex_mc';
                  const currentSelection = userAnswers[currentQuestionIdx];

                  let isSelected = false;
                  if (isComplex) {
                    isSelected = Array.isArray(currentSelection) && currentSelection.includes(idx);
                  } else {
                    isSelected = currentSelection === idx;
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(currentQuestionIdx, idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3 text-sm ${
                        isSelected
                          ? 'bg-emerald-950/40 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-950/50'
                          : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-emerald-500 text-slate-950'
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="flex-1 leading-normal">{option}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                <button
                  disabled={currentQuestionIdx === 0}
                  onClick={() => setCurrentQuestionIdx((prev) => prev - 1)}
                  className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 px-4 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center space-x-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>

                {currentQuestionIdx === currentExamQuestions.length - 1 ? (
                  <button
                    onClick={handleSubmitExam}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg shadow-emerald-600/30 flex items-center space-x-1.5"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Kirim Jawaban</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestionIdx((prev) => prev + 1)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center space-x-1"
                  >
                    <span>Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center space-y-2">
                <span className="text-xs text-slate-400 font-medium">Sisa Waktu Pengerjaan</span>
                <div
                  className={`text-3xl font-extrabold tracking-wider ${
                    timerSeconds < 120 ? 'text-red-400 animate-pulse' : 'text-emerald-400'
                  }`}
                >
                  {Math.floor(timerSeconds / 60)}:
                  {(timerSeconds % 60).toString().padStart(2, '0')}
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Navigasi Nomor Soal
                </h4>
                <div className="grid grid-cols-5 gap-2">
                  {currentExamQuestions.map((_, idx) => {
                    const isAnswered = userAnswers[idx] !== undefined;
                    const isFlagged = flaggedQuestions[idx];
                    const isCurrent = currentQuestionIdx === idx;

                    let bgClass = 'bg-slate-800 text-slate-400 border-slate-700';
                    if (isCurrent) bgClass = 'ring-2 ring-emerald-400 bg-slate-700 text-white font-bold';
                    else if (isFlagged) bgClass = 'bg-amber-500/20 text-amber-400 border-amber-500/40 font-bold';
                    else if (isAnswered) bgClass = 'bg-emerald-600 text-white font-semibold';

                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentQuestionIdx(idx)}
                        className={`h-9 w-full rounded-lg text-xs border flex items-center justify-center transition-all ${bgClass}`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. RESULTS & SCORE REVIEW */}
        {activeTab === 'results' && lastExamResult && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  Hasil Asesmen Pembelajaran
                </span>
                <h2 className="text-3xl font-extrabold text-white">{lastExamResult.topic}</h2>
                <p className="text-xs text-slate-400">
                  {lastExamResult.studentName} ({lastExamResult.studentId}) • SMAS Alhilaal Tehoru
                </p>
              </div>

              <div className="inline-flex flex-col items-center justify-center bg-slate-950/80 border border-slate-800 px-10 py-6 rounded-2xl shadow-inner">
                <span className="text-xs text-slate-400 font-semibold mb-1">NILAI AKHIR</span>
                <span className="text-6xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  {lastExamResult.score}
                </span>
                <span className="mt-2 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  Kategori: {lastExamResult.category}
                </span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-white">Pembahasan Detail Jawaban</h3>
              <div className="space-y-4">
                {currentExamQuestions.map((q, idx) => {
                  const userAns = userAnswers[idx];
                  const isCorrect = userAns === q.correct;

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border space-y-3 text-xs ${
                        isCorrect ? 'bg-slate-950/40 border-emerald-500/30' : 'bg-slate-950/40 border-red-500/30'
                      }`}
                    >
                      <div className="flex items-start justify-between font-semibold">
                        <span className="text-slate-200">
                          {idx + 1}. {q.question}
                        </span>
                      </div>

                      <div className="text-slate-400 space-y-1">
                        <div>
                          Jawaban Anda:{' '}
                          <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                            {userAns !== undefined
                              ? Array.isArray(userAns)
                                ? userAns.map((i) => q.options[i]).join(', ')
                                : q.options[userAns] || 'Terisi'
                              : 'Tidak Dijawab'}
                          </span>
                        </div>
                        <div>
                          Kunci Jawaban:{' '}
                          <span className="text-emerald-400 font-bold">
                            {Array.isArray(q.correct)
                              ? q.correct.map((c) => q.options[c]).join(', ')
                              : q.options[q.correct] || String(q.correct)}
                          </span>
                        </div>
                      </div>

                      {q.explanation && (
                        <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300">
                          <strong className="text-emerald-400">Pembahasan:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 5. DASHBOARD GURU */}
        {activeTab === 'dashboard' && userRole === 'teacher' && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Dashboard Analisis Guru</h2>
                <p className="text-xs text-slate-400">
                  Pengelolaan nilai, ketuntasan kelas, dan rekapitulasi SMAS Alhilaal Tehoru
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={exportToCSV}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center space-x-2 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Rekap CSV</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3">Siswa</th>
                    <th className="p-3">NIS/ID</th>
                    <th className="p-3">Materi</th>
                    <th className="p-3">Nilai</th>
                    <th className="p-3">Kategori</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {studentResults.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-semibold text-white">{row.studentName}</td>
                      <td className="p-3 text-slate-400">{row.studentId}</td>
                      <td className="p-3">{row.topic}</td>
                      <td className="p-3 font-bold text-emerald-400">{row.score}</td>
                      <td className="p-3">{row.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 6. BANK SOAL */}
        {activeTab === 'bank_soal' && userRole === 'teacher' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Kelola Bank Soal</h2>
                <p className="text-xs text-slate-400">
                  Total {questions.length} soal terdaftar dalam database asesmen
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-md flex items-center space-x-2"
              >
                <span>+ Tambah Soal Baru</span>
              </button>
            </div>

            <div className="space-y-4">
              {questions.map((q, idx) => (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-emerald-400">#{idx + 1}</span>
                    <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {q.topic}
                    </span>
                  </div>
                  <div className="text-slate-100 font-semibold text-sm">{q.question}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. USER GUIDE */}
        {activeTab === 'user_guide' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-white">Petunjuk Penggunaan Platform</h2>
            <p className="text-slate-400 text-sm">
              Panduan pelaksanaan asesmen Biologi interaktif di SMAS Alhilaal Tehoru
            </p>
          </div>
        )}
      </main>

      {/* LOGIN MODAL */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 max-w-md w-full space-y-6 shadow-2xl relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-white text-center">Masuk Portal Asesmen</h3>
            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              <input
                type="text"
                required
                placeholder="Nama Lengkap Siswa"
                value={studentInfo.name}
                onChange={(e) => setStudentInfo({ ...studentInfo, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200"
              />
              <input
                type="text"
                required
                placeholder="NIS / ID Peserta"
                value={studentInfo.id}
                onChange={(e) => setStudentInfo({ ...studentInfo, id: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-200"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500"
              >
                Masuk Sekarang
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-slate-500 py-6 px-4 text-center text-xs mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 <strong className="text-slate-300">BIOLOGY ASSESSMENT CENTER</strong> • SMAS Alhilaal Tehoru
          </div>
          <div>
            Pengembang Evaluasi: <span className="text-slate-300">Ulpia Pelupessy, S.Pd.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}