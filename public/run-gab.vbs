set WshChell = WScript.CreateObject("WScript.Shell")
tmpMax = 0
Dim dados, linha, mes, dia, ano

headMaster = "fila;grupos"
titulos = "Especialidade;Skill;ChamsAten;ChamsAban;ChamsRecebidas;NS20Seg;PCA;ChamsEspera;AgtsLogados;AgtsDisponiveis;AgtsFalando;AgtsPAUSA;AgtsOutro;ChamMaisAntigaEsperando;TempoMedpAban;TMA;TME;TMT"
horaIn = Now

ano = Year(Now)

If(Month(Now) < 10 ) Then
  mes = "0" & Month(Now)
Else
  mes = Month(Now)
End If

If(Day(Now) < 10 ) Then
  dia = "0" & Day(Now)
Else
  dia = Day(Now)
End If




data = ano & mes & dia
'WScript.Echo teste
Do While tmpMax = 0
  call Rodar
  call lerArquivo
  WScript.Sleep 3000
Loop

sub Rodar()
  Servidor = "10.221.236.101"
  dac = "1"
  Skills = "441;442;443;444;445;446;447;448;449;450;451;452;453;454;455;456;457;458;459;460;461;462;463;466"
  Relat = "Integrated\Designer\Acompanhamento - Tempo Real  - GAB"
  Set acsApp = CreateObject("ACSUP.cvsApplication")
  Set acsSrv = CreateObject("ACSUPSRV.cvsServer")
  scriptdir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
  CentreVuOpen = acsApp.Servers.Count

  If (CentreVuOpen > 0) Then
    For i = 1 To CentreVuOpen
      If (acsApp.Servers.Item(i).Name = Servidor) Then
        Set acsSrv = acsApp.Servers.Item(i)
        found = True
        Exit For
      End If
    Next
  Else
    cmsoff = True
  End If

  On Error Resume Next
  acsSrv.Reports.ACD = dac
  Set info = acsSrv.Reports.Reports(Relat)
  MsgBox info
  b = acsSrv.Reports.CreateReport(info, rep)
  If b Then
    rep.TimeZone = "default"
    rep.Window.Top = 0
    rep.Window.Left = 0
    rep.Window.Width = 0
    rep.Window.Height = 0
    rep.SetProperty "Grupos / Especialidades", Skills
    b = rep.ExportData(scriptdir & "\" & data & "-CMS(GAB).csv", 59, 0, True, False, True)
    'b = rep.ExportData("", 9, 0, True, False, True)
    rep.Quit
  End If
  Set info = Nothing
end sub

sub lerArquivo()
  dim ts, f, s, listLines, i, y, linha, listHeaders, saida
  set fs = CreateObject("Scripting.FileSystemObject")
  fileIn = fs.OpenTextFile(data & "-CMS(GAB).csv").ReadAll
  set objFileOut = fs.CreateTextFile("dados.json", true)
  
  i = 0

  listLines = Split(fileIn, vbCrLf)
  listHeaders = Split(titulos, ";")
  saida = "[{"
  For Each line In listLines

    If (i < 1) then
      saida = saida + chr(34) & "fila" & chr(34) & ": " & listLines(i) & ", "
    End If
    If (i = 1) Then
      saida = saida + chr(34) & "grupos" & chr(34) & ": ["
    End If

    s = Split(line, ";")
    y = 0
    If(i > 0 AND i < 25 ) Then

      saida = saida + "{"
      for Each cell In s
        if (y = 17) Then
          if (IsNumeric(cell)) Then
            If (Left(cell, 1) = ",") Then
              cell = 0
            End If
            saida = saida + chr(34) & listHeaders(y) & chr(34) & ": " & replace(cell, ",", ".")
          Else
            saida = saida + chr(34) & listHeaders(y) & chr(34) & ": " & chr(34) & cell& chr(34)
          End If          
        Else
          if (IsNumeric(cell)) Then
            If (Left(cell, 1) = ",") Then
              cell = 0
            End If
            saida = saida + chr(34) & listHeaders(y) & chr(34) & ": " & replace(cell, ",", ".") & ","
          Else
            saida = saida + chr(34) & listHeaders(y) & chr(34) & ": " & chr(34) & cell& chr(34) & ","
          End If
        End If
        y = y + 1
      Next
      If (i < 24) Then
        saida = saida + "},"
      Else
        saida = saida + "}"
      End If
    End If



    i = i + 1
  Next
  horaOut = Time()
  saida = saida + "], " & chr(34) & "updated_at" & chr(34) & ": " & chr(34) & CStr(horaOut) & chr(34)
  saida = saida + "}]"
  objFileOut.WriteLine saida
  objFileOut.close
end sub